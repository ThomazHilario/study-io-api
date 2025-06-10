export const signInServiceMock = {
  signIn: jest.fn().mockResolvedValue({ 
    id:'1',
    username: 'testuser',
    email: 'cIzgI@example.com',
    password: 'hashedPassword123',
    image: null
   })
}