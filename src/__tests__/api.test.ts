import { describe, it, expect, vi, beforeEach } from 'vitest'
import { loginUser } from '@/lib/api'

// Simulamos el fetch global
global.fetch = vi.fn()

describe('API Library', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should send data in x-www-form-urlencoded format with username field', async () => {
    // Mock de respuesta exitosa
    (fetch as any).mockResolvedValue({
      ok: true,
      json: async () => ({ access_token: 'fake-token' }),
    })

    await loginUser('test@example.com', 'password123')

    // Verificamos la llamada al fetch
    const [url, options] = (fetch as any).mock.calls[0]
    
    expect(options.headers['Content-Type']).toBe('application/x-www-form-urlencoded')
    expect(options.body).toContain('username=test%40example.com')
    expect(options.body).toContain('password=password123')
    expect(options.body).toContain('grant_type=password')
  })
})