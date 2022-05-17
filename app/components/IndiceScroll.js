const IndiceScroll = ()=>{
    
    const d = document,
        $question1 = d.getElementById('q1'),
        $question2 = d.getElementById('q2'),
        $question3 = d.getElementById('q3'),
        $question4 = d.getElementById('q4'),
        $question5 = d.getElementById('q5'),
        $question6 = d.getElementById('q6'),
        $answer1 = d.getElementById('1'),
        $answer2 = d.getElementById('2'),
        $answer3 = d.getElementById('3'),
        $answer4 = d.getElementById('4'),
        $answer5 = d.getElementById('5'),
        $answer6 = d.getElementById('6')

    d.addEventListener('click', (e)=>{

        if(e.target == $question1){
         
            const scroll1= $answer1.offsetTop - 90
            window.scrollTo(0, scroll1)
        }
        if(e.target == $question2){
            const scroll2= $answer2.offsetTop -90
            window.scrollTo(0,scroll2)
        }
        if(e.target == $question3){
            const scroll3= $answer3.offsetTop -90
            window.scrollTo(0,scroll3)
        }
        if(e.target == $question4){
            const scroll4= $answer4.offsetTop -90
            window.scrollTo(0,scroll4)
        }
        if(e.target == $question5){
            const scroll5= $answer5.offsetTop -90
            window.scrollTo(0,scroll5)
        }
        if(e.target == $question6){
            const scroll6= $answer6.offsetTop -90
            window.scrollTo(0,scroll6)
        }

    })

}

export { IndiceScroll }