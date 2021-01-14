import database from '../src/models';

class residentService{

    static async getResidentBuilding(bid){
        try{
            const resident= database.Resident.findAll({
                where:{unit_id:Number(bid)}
            })
            return resident 
        }catch(err){
            throw err
        }
    }

    static async getResidentInAttic(zoneid){
        try{
            const resident = database.sequelize.query(`SELECT structure_id FROM Residents WHERE unit_id IN (SELECT id FROM Units WHERE floorLevel = "Attic" AND id IN (select id From Structures WHERE sub_zone_id = ${zoneid}))`);
            return resident
        }catch(err){
            throw err
        }
    }

    static async createResident(data){
        try{
            const resident = await database.Resident.create(data)
            return resident 
        }catch(error){
            throw error
        }
    }
}
export default residentService;
