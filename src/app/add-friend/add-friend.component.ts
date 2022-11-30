import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""

  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any = {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
    this.api.addFriend(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("course added successfully")
          this.name=""
          this.friendName=""
          this.DescribeYourFriend=""
          this.friendNickName=""
          
        } else {
          alert("something went wrong")
          
        }
      }
    )

  }

}
