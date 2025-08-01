
Events.on(EventType.WorldLoadEvent, l =>{
     //delayed so it doesnt overdide initialWaveSpacing
     Time.run(0.5 * Time.toSeconds, () =>{
        if(Vars.state.rules.attackMode){
            Vars.state.rules.waveSpacing = Math.min(Time.toSeconds * 30, Vars.state.rules.waveSpacing);
        }
        //not instant so it doesnt break spawning too hard
        else Vars.state.rules.waveSpacing = 1;
   
    });
});


