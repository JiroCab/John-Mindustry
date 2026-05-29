let prev = -1;

Events.on(GameOverEvent.class, l =>{
    if(prev > 0) Vars.state.rules.waveSpacing = prev;
}

Events.on(WaveEvent, l =>{
    //Just in case, put back the old wave time on last wave
    if(Vars.state.wave >= Var.sstate.rules.winWave){
        if(prev > 0) Vars.state.rules.waveSpacing = prev;
    }
}


Events.on(EventType.WorldLoadEvent, l =>{
    //delayed so it doesnt overdide initialWaveSpacing
    Time.run(0.5 * Time.toSeconds, () =>{
        //Save the "normal" wave delay so it doesnt instantly spawn them all on restart
        prev = Vars.state.rules.waveSpacing;

        if(Vars.state.rules.attackMode){
            Vars.state.rules.waveSpacing = Math.min(Time.toSeconds * 30, Vars.state.rules.waveSpacing);
        }
        //not instant so it doesnt break spawning too hard
        else Vars.state.rules.waveSpacing = 1;
    });
});


