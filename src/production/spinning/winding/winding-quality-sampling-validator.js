require("should");
var validateMachine = require('../../../master/machine-validator');
var validateProduct = require('../../../master/product-validator');
var validateUster = require('../../../master/uster-validator');
var validateUnit = require('../../../master/unit-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);
    
    data.should.have.property('unitId');
    data.unitId.should.instanceof(Object);

    data.should.have.property('spinning');
    data.spinning.should.instanceof(Object);
    validateUnit(data.spinning);

    data.should.have.property('date');
    data.date.should.instanceOf(Date);

    data.should.have.property('machine');
    data.machine.should.instanceof(Object);
    validateMachine(data.machine);

    data.should.have.property('machineId');
    data.machineId.should.instanceof(Object);
    
    data.should.have.property('U');
    data.U.should.instanceOf(Number);

    data.should.have.property('thin');
    data.thin.should.instanceOf(Number);

    data.should.have.property('thick');
    data.thick.should.instanceOf(Number);

    data.should.have.property('neps');
    data.neps.should.instanceOf(Number);

    data.should.have.property('ipi');
    data.ipi.should.instanceOf(Number);

    data.should.have.property('uster');
    data.uster.should.instanceof(Object);
    validateUster(data.uster);

    data.should.have.property('usterId');
    data.usterId.should.instanceof(Object);

    data.should.have.property('sys');
    data.sys.should.instanceOf(Number);

    data.should.have.property('elongation');
    data.elongation.should.instanceOf(Number);
    
    data.should.have.property('grade');
    data.grade.should.be.String();

}