/**
 * Local class.
 */
class Local {
  /**
     * Check the given credentials.
     *
     * @param   {string}  data
     * @param   {string}  password
     *
     * @return  {string}
     */
  async checkCredentials(data, password) {
    const user = await container.userRepository.first({'email': data}) || await container.userRepository.first({user_number: data}) || await container.userRepository.first({national_id: data});
    if (user && user.password && password && await user.verifyPassword(password)) return user;
    // make user login by national id without passwords
    // TODO find another solution
    if (user && user.password && !password) return user;
    return false;
  }
}

module.exports = Local;
