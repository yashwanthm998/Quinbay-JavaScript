let count = 0;
function cc(card) {
  if (card >= 2 && card <= 6) {
    count += 1;
  } else if (card >= 7 && card <= 9) {
  } else if (
    card === 10 || 
    card === 'J' || 
    card === 'Q' || 
    card === 'K' || 
    card === 'A'
  ) {
    count -= 1;
  }
  return count + (count > 0 ? " Bet" : " Hold");
}
cc(2); cc(3); cc(7); cc('K'); cc('A');