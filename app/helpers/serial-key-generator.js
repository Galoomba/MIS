const Model = container.Model;

/**
 * User model
 */
class SerialModel extends Model {
  /**
   * Return table name for this model.
   *
   * @return  {string}
   */
  static tableName = 'serial';

  /**
   * Generate Rerquest serial
   * @param {transaction} transaction
   * @return  {String}
   */
  async generateSerial(transaction) {
    const generateSerialTransiaction = await container.transaction(container.knex, async (trx) => {
      trx = transaction || trx;
      /** query the serial table with the bigest counter value with the requested line*/
      const [prevSerial] = await SerialModel.query(trx)
          .forUpdate()
          .max({serial: 'counter'});
      /** Add +1 to the counter and insert new record with the new value */
      let newSerial = (prevSerial.serial) ? prevSerial.serial + 1 : 1;
      /** Add zeros to the start of the counter */
      newSerial = this.zeroPad(newSerial, 6);
      const insertNewSerial = await SerialModel.query(trx)
          .insert({counter: newSerial, deleted: 0, created_at: container.moment().format('YYYY-MM-DD HH:mm:ss')});
      /** return the combination of the lineName,year,and the new counter value */
      return `${insertNewSerial.counter}`;
    });
    return generateSerialTransiaction;
  }
  /**
   * Add zeros to the start of the counter
   * @param {Integer} num
   * @param {Integer} zeros
   * @return {string}
   */
  zeroPad(num, zeros) {
    return String(num).padStart(zeros, '0');
  }
}

module.exports = SerialModel;
