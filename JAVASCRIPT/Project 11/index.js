let user = document.getElementById("userID");

async function fetchUser(username) {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let result = await response.json();
    displayUser(result);
}

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("userProfile").innerHTML = `<span class="loader"></span>`
    let userId = user.value;
    fetchUser(userId);
});

function displayUser({
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    html_url
}) {
    // const {
    //     avatar_url,
    //     name,
    //     bio,
    //     followers,
    //     following,
    //     public_repos,
    // } = result;

    if(!avatar_url){
        document.getElementById("userProfile").innerHTML = `<h1>User Not Found</h1>`
        return
    } 

    if(!bio){
        bio = ''
    }
    document.getElementById("userProfile").innerHTML = `               
                    <div class="userInfo">
                        <img src=${avatar_url} class="userImg" alt="">
                        <div class="userDetail">
                            <p class="userName">${name}</p>
                            <p class="userBio">${bio}</p>
                        </div>
                    </div>
                    <div class="userFollow">
                        <div class="Follower">
                            <div class="repo">
                                <p>Follower</p>
                                <p>${followers}</p>
                            </div>
                            <div class="repo">
                                <p>Following</p>
                                <p>${following}</p>
                            </div>
                            <div class="repo">
                                <p>Repo</p>
                                <p>${public_repos}</p>
                            </div>
                        </div>
                        <a href=${html_url} target='_blank' class="VisitProile"> 
                        <div class="VisitProile">
                            Visit Profile
                        </div>
                        </a>
                    </div>`;
}
