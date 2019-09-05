class Citizen 
{
    vote;
    constructor() 
    {
    //votr for miflaga
    this.vote = Math.ceil(Math.random()*5)
    }
}

class PartyMember extends Citizen
{
    name;
    ID;
    // the ID of the VOTE for party member his place in the miflaga
    PrimeManagerVoteID;
    //his manager
    Manager_id;
    miflaga_ID;

    constructor(name,ID)
    {
        super();
        this.name=name;
        this.ID=ID;
        this.miflaga_ID=Math.ceil(Math.random()*5)
    }
    change_Manager()
    {

    }

    Change_PrimeManagerVoteID(PrimeManagerVoteID){

           this.PrimeManagerVoteID=PrimeManagerVoteID;

    }

}

let yheuda= new PartyMember("yheuda",5);

let alika = new PartyMember("ALIKA",2);
let edi =new PartyMember("Edi",2)
let yheuda2= new PartyMember("yheuda2",345);
let alika2 = new PartyMember("ALIKA2",963);
let edi2 =new PartyMember("Edi2",123)
let yheuda3= new PartyMember("yheuda3",345);
let alika3 = new PartyMember("ALIKA3",963);
let edi3 =new PartyMember("Edi3",123)

edi.Change_PrimeManagerVoteID(5)

console.log(yheuda.vote);
console.log(alika.vote);
console.log(edi.vote);

let list1=[];
list1.push(yheuda)
list1.push(alias)
list1.push(edi)

class Miflaga
{
    miflaga_id;
    partyMembersArray;
    IDOfManager;

    constructor(Number_ID,partyMembersArray,IDofManager)
    {
        this.Number_ID=Number_ID;
        this.partyMembersArray=partyMembersArray;
        this.IDofManager=vote_for_manager();
    }

    vote_for_manager()
    {
        let list_votes=[]

        for(let i=0;i<partyMembersArray;i++)
        {
            list[i].push(0)
            partyMembersArray[i].PrimeManagerVoteID=i+1;
        }

        //now we need to vote for manager of the miflaga
        partyMembersArray.forEach(party_member => {
            let miflaga_VOTE_ID=Math.ceil(Math.random()*partyMembersArray.length)
            


            while(miflaga_VOTE_ID!=party_memer.PrimeManagerVoteID)
            {
                miflaga_VOTE_ID=Math.ceil(Math.random()*partyMembersArray.length)
            }
            list_votes[miflaga_VOTE_ID-1]++;
        });
        let max=0
        let mikum=0;
        list_votes.forEach((element,index) => {
            if (element>max)
            {
                max=element;
                mikum=index+1;
            }
        });
        return partyMembersArray[mikum].ID;
    }
    numberPartyMembers()
    {
        return partyMembersArray.length;
    }
    
}
class Government
{
    Miflaga_array;
    biggest_miflaga;
    PrimeMinisterID;

    constructor(Miflaga_array)
    {
        this.Miflaga_array = Miflaga_array
    }
    biggest_miflaga()
    {
        let biggest=0;
        let mikum=0
        this.Miflaga_array.array.forEach((miflaga,index) => 
        {
            if(miflaga.numberPartyMembers>biggest)
            {
                biggest=miflaga.numberPartyMembers;
                mikum=index;
            }    
        });
        return Miflaga_array[mikum]
    }
    bhirot(array_of_citizens)
    {
        let miflagot=[];
        for(let i=0;i<Miflaga_array.length;i++)
        {
            miflagot[i].push(0)
        }

        array_of_citizens.array.forEach(citizen => {
            miflagot[citizen.vote-1]++;
        });
        
        let max=0;
        let mikum=0
        miflagot.array.forEach((element,index) => {
            if(element>max)
            {
                max=element;
                mikum=index;
            }
        });

        PrimeMinisterID=Miflaga_array[mikum].IDOfManager
    }
}

