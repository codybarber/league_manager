<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">League Manager v1.0</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Teams <span class="caret"></span></a>
              <ul class="dropdown-menu team-list">
                <li>
                  <router-link :to="{ name: 'Angels'}">
                    <i class="bb-LAA"></i>
                    <span> Angels</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Bluejays'}">
                    <i class="bb-TOR"></i>
                    <span> Blue Jays</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Braves'}">
                    <i class="bb-ATL"></i>
                    <span> Braves</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Brewers'}">
                    <i class="bb-MIL"></i>
                    <span> Brewers</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Cubs'}">
                    <i class="bb-CHC"></i>
                    <span> Cubs</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Dodgers'}">
                    <i class="bb-LAD"></i>
                    <span> Dodgers</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Giants'}">
                    <i class="bb-SF"></i>
                    <span> Giants</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Indians'}">
                    <i class="bb-CLE"></i>
                    <span> Indians</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Mariners'}">
                    <i class="bb-SEA"></i>
                    <span> Mariners</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Marlins'}">
                    <i class="bb-MIA"></i>
                    <span> Marlins</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Mets'}">
                    <i class="bb-NYM"></i>
                    <span> Mets</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Orioles'}">
                    <i class="bb-BAL"></i>
                    <span> Orioles</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Phillies'}">
                    <i class="bb-PHI"></i>
                    <span> Phillies</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Pirates'}">
                    <i class="bb-PIT"></i>
                    <span> Pirates</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Tigers'}">
                    <i class="bb-DET"></i>
                    <span> Tigers</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Yankees'}">
                    <i class="bb-NYY"></i>
                    <span> Yankees</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link :to="{ name: 'Leaders'}">
                <span>League Leaders</span>
              </router-link>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
