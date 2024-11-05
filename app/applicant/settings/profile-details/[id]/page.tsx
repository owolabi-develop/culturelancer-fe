import PersonalDetailAndSkills from "@/app/ui/applicant/profile-settings/personaldetailsskill"

export default async function ApplicantPersonalDetailAndSkills(props: { params: Promise<{ id: string }> }){
    const params = await props.params
    console.log("profileID",params.id)


    return (
        <>
            <PersonalDetailAndSkills id={params.id}/>
        </>
    )
}