import * as React from 'react';
import { StatusBar, StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';

function RulesScreen({ navigation }) {



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>
                <StatusBar barStyle='dark-content' hidden={false} translucent backgroundColor="transparent" />
                <Text style={styles.rulestext}>Left Right Center is a 5 player golf game.{"\n"}</Text>
                <Text style={styles.rulestext}>There are 3 teams each hole a player is not necessarily on the same team the entire round.{"\n"}</Text>
                <Text style={styles.rulestext}>After each tee shot the 2 players closest to the right side of the fairway are on the right team the furthest 2 are the left team and the remaining player will be on the center team.{"\n"}</Text>
                <Text style={styles.rulestext}>Once a hole is complete if the left team shot a 4 and a 5 the resulting value would be 45 same for the right team.</Text>
                <Text style={styles.rulestext}>The middle player will always have his score be a repetition, so if he shot a 4 he would be scored as a 44,{"\n"}</Text>
                <Text style={styles.rulestext}>On teams of 2 the lower score should always precede the higher score.{"\n"}</Text>
                <Text style={styles.rulestext}>The difference between the scores of all 3 teams is taken and each player will gain or lose the corresponding points.{"\n"}</Text>
                <Text style={styles.rulestext}>If a player scores a birdie or better. when the difference is taken the opposing team will have the higher score preceeding{"\n"}</Text>
                <Text style={styles.rulestext}>If 2 opposing teams score a birdie or better then when the difference is taken both scores are flipped.{"\n"}</Text>
                <Text style={styles.rulestext}>Note that since the center team is made of 1 player they will either gain or lose double points each hole.{"\n"}</Text>
                <Text style={styles.rulestext}>After the 15th hole the players can decide if they want to start playing for double points.{"\n"}</Text>
                <Text style={styles.rulestext}>The purpose of this app is to automate point calculations.{"\n"}</Text>
                <Text style={styles.rulestext}>Example Hole:</Text>
                <Text style={styles.rulestext}>Pete, Steven, Jared, Brad, and Lynney are about to play a par 4.</Text>
                <Text style={styles.rulestext}>After the tee shots Pete and Brad both pull left; while Jared and Lynney both slice to the right. Steven's shot goes nearly straight down the fairway</Text>
                <Text style={styles.rulestext}>After the hole is finished Pete and Brad both boggied(5). Lynney shot par(4) and Jared shot a birdie(3). Steven shot a par(4).{"\n"}</Text>
                <Text style={styles.rulestext}>This means the left team scored 55 the right team scored a 34. While center scored a 44.</Text>
                <Text style={styles.rulestext}>So since 55 - 34 = 21 the left team each lose 21 points and the right team gain 21.</Text>
                <Text style={styles.rulestext}>And since 55 - 44 = 11 the left team each lose 11 points and the center team gains 11.</Text>
                <Text style={styles.rulestext}>Lastly since 44 - 34 = 10 the center lost 20 points and each of those on the left team gain 10 points.{"\n"}</Text>
                <Text style={styles.rulestext}>Once all totals are calculate Jared and Lynney will be up 31 points. Pete and Brad will each be down 32 points. Steven who was centered lost and won some points so he will be up 2 points.</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },

    scrollview: {
        marginHorizontal: 20,
    },

    rulestext: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 24,
    },
});

export default RulesScreen;