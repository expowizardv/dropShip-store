export class AuthService {
  static async signIn(email: string, password: string) {
    // Mock authentication
    return {
      user: {
        id: '1',
        email,
        name: 'Demo User'
      }
    };
  }

  static async signOut() {
    // Mock sign out
    return true;
  }

  static async getSession() {
    // Mock session
    return null;
  }
}