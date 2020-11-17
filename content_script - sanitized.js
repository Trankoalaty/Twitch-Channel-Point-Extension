function ProcessReward()
{
	let availColors = ['red', 'white', 'blue', 'green', 'yellow', 'orange', 'cyan', 'purple', 'pink'];
	let chosenColor = '';
	let myDiv = document.getElementsByClassName('redemption-list-item__body');
	
	if (myDiv.length > 0)
	{
	
		let firstReward = myDiv[0].getElementsByTagName('p');
		let rewardBtn = myDiv[0].querySelectorAll('[data-test-selector="complete-button"]')[0];
		
		if (firstReward.length > 1)
		{
			if (myDiv[0].getElementsByTagName('p')[0].innerText.toLowerCase().includes('right light specific color') == true)
			{
				if (availColors.indexOf(myDiv[0].getElementsByTagName('p')[1].innerText.toLowerCase()) != -1)
				{
					chosenColor = myDiv[0].getElementsByTagName('p')[1].innerText.toLowerCase();
				}
				else
				{
					//if they didn't specify a color or typed it wrong then get a random color so they didn't waste their points
					chosenColor = availColors[Math.floor(Math.random() * Math.floor(9))];					
				}

				let data = {element: ""};

				fetch("YOUR URL HERE", {
				  method: "POST", mode:"no-cors"					
				}).then(res => {
				  console.log("Request complete! Right color " + chosenColor);					  
				});
				rewardBtn.click();				
			}
			else if (myDiv[0].getElementsByTagName('p')[0].innerText.toLowerCase().includes('left light specific color') == true)
			{
				if (availColors.indexOf(myDiv[0].getElementsByTagName('p')[1].innerText.toLowerCase()) != -1)
				{
					chosenColor = myDiv[0].getElementsByTagName('p')[1].innerText.toLowerCase();
				}
				else
				{
					//if they didn't specify a color or typed it wrong then get a random color so they didn't waste their points
					chosenColor = availColors[Math.floor(Math.random() * Math.floor(9))];					
				}				
					
				let data = {element: ""};

				fetch("YOUR URL HERE", {
				  method: "POST", mode:"no-cors"
				}).then(res => {
				  console.log("Request complete! Left color " + chosenColor);
				  //rewardBtn.click();
				});
				rewardBtn.click();								
			}
			else
			{
				//mark as complete immediately but do nothing because the reward I want must have an input
				rewardBtn.click();
			}			
		}	
		else
		{
			//mark as complete immediately but do nothing because the reward I want must have an input
			rewardBtn.click();
		}		
	}
}

 let observer = new MutationObserver(mutations => {
	 for (let mutation of mutations) {
		if (mutation.type == 'childList' && mutation.addedNodes.length > 0 && mutation.addedNodes[0].innerHTML !== undefined && mutation.addedNodes[0].innerHTML.includes('redemption-list-item__body'))
		{
			console.log(mutations);
			ProcessReward();
		}
	 }
 });
  
 observer.observe(document, { childList: true, subtree: true });