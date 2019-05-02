export const selectTrainer=(trainer)=>{
    console.log("You have clicked on Trainer", trainer.id);
    return{
        type: 'TRAINER_SELECTED',
        payload: trainer
    }
}