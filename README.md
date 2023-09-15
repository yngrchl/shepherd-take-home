# Shepherd Take Home
## Rachel's attempt, September 15 2023

[Challenge description](https://docs.google.com/document/d/1O87BWg-2G78gHuCK2ODyRSZER90_K4U4aP2y0OvN9SQ/edit)

[Walkthrough](https://www.loom.com/share/Rachels-Approach-to-the-Shepherd-Take-Home-21fbbf4dadf04cab8cd9feb0eb6ce620?sid=818dddbd-910b-46f5-8597-fd77c412454d)

note: I realized after recording that the AppType data model has an unnecessary `type_id` field -- the `type_id` field of the CompanyApp/EmployeeApp/AutoApp would've just mapped to the AppType `id` field. You'll see in the video that those id values for the 3 AppTypes in the DB are higher than 0, 1, 2, but that was just an error in debugging and ideally would be set as 0, 1, 2 for "company", "employee", and "auto" respectively. Also I didn't realize how loud the typing sounds would be, so apologies for that jump scare.

