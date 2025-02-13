class Bet:
    def __init__(self, name):
        self.name = name
        self.yes_votes = 0
        self.no_votes = 0
    
    def vote_yes(self):
        self.yes_votes += 1
    
    def vote_no(self):
        self.no_votes += 1
    
    def get_results(self):
        return {
            "Bet Name": self.name,
            "Yes Votes": self.yes_votes,
            "No Votes": self.no_votes
        }

def main():
    bets = {}
    
    while True:
        print("\n1. Create a Bet\n2. Vote Yes\n3. Vote No\n4. View Results\n5. Delete a Bet\n6. Exit")
        choice = input("Choose an option: ")
        
        if choice == "1":
            name = input("Enter bet name: ")
            if name in bets:
                print("Bet with this name already exists!")
            else:
                bets[name] = Bet(name)
                print(f"Bet '{name}' created.")
        
        elif choice == "2":
            name = input("Enter bet name: ")
            if name in bets:
                bets[name].vote_yes()
                print("Voted Yes.")
            else:
                print("Bet not found.")
        
        elif choice == "3":
            name = input("Enter bet name: ")
            if name in bets:
                bets[name].vote_no()
                print("Voted No.")
            else:
                print("Bet not found.")
        
        elif choice == "4":
            name = input("Enter bet name: ")
            if name in bets:
                results = bets[name].get_results()
                print(results)
            else:
                print("Bet not found.")
        
        elif choice == "5":
            name = input("Enter bet name to delete: ")
            if name in bets:
                del bets[name]
                print(f"Bet '{name}' deleted.")
            else:
                print("Bet not found.")
        
        elif choice == "6":
            print("Exiting program.")
            break
        
        else:
            print("Invalid choice, please try again.")

if __name__ == "__main__":
    main()
