import * as React from 'react';
import { StatusBar, StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';

function RulesScreen({ navigation }) {



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>
                <StatusBar barStyle='dark-content' hidden={false} translucent backgroundColor="transparent" />
                <Text style={styles.rulestext}>Left Right Center is a game centered around golf and money.{"\n"}</Text>
                <Text style={styles.rulestext}>Five players are required to play.{"\n"}</Text>
                <Text style={styles.rulestext}>After Each tee shot the two left most players will be on the left team, the two right most players will be on the right team, and the middle shot will be the center.{"\n"}</Text>
                <Text style={styles.rulestext}>If all balls go the same direction the two closest to the right side of the fairway are left, the third closest is middle and the remaining two are right.{"\n"}</Text>
                <Text style={styles.rulestext}>Once a hole is complete if the left team shot a 4 and a 5 the resulting value would be 45 same for the right team.</Text>
                <Text style={styles.rulestext}>The middle player will always have his score be a repetition, so if he shot a 4 he would be scored as a 44{"\n"}</Text>
                <Text style={styles.rulestext}>On teams of 2 the lower score should always precede the higher score.{"\n"}</Text>
                <Text style={styles.rulestext}>The differences between each of the 3 groups are taken and the player with the highest score will owe the players with the lowest score that many dollars.{"\n"}</Text>
                <Text style={styles.rulestext}>Note that center pays and recieves double.</Text>
                <Text style={styles.rulestext}>After the 15th hole the players can decide if they want to start playing for two dollar points.{"\n"}</Text>
                <Text style={styles.rulestext}>At the end of the round all players should pay out the money they owe.{"\n"}</Text>
                <Text style={styles.rulestext}>Example Hole:</Text>
                <Text style={styles.rulestext}>Pete, Steven, Jared, Brad, and Lynney are about to play a par 4.</Text>
                <Text style={styles.rulestext}>After the tee shots Pete and Brad both pull left; while Jared and Lynney both slice to the right. Steven's shot goes nearly straight down the fairway</Text>
                <Text style={styles.rulestext}>After the hole is finished Pete and Brad both boggied(5). Lynney shot par(4) and Jared shot a birdie(3). Steven shot a par(4).{"\n"}</Text>
                <Text style={styles.rulestext}>This means the left team scored 55 the right team scored a 34. While center scored a 44.</Text>
                <Text style={styles.rulestext}>So since 55 - 34 = 21 the left team each pay the right team 21 dollars.</Text>
                <Text style={styles.rulestext}>And since 55 - 44 = 11 the left team each pay the center 11 dollars.</Text>
                <Text style={styles.rulestext}>Lastly since 44 - 34 = 10 the center must pay the left team 20 dollars.{"\n"}</Text>
                <Text style={styles.rulestext}>Once all totals are calculate Jared and Lynney will be up 31 dollar. Pete and Brad will each be down 32 dollars. Steven who was centered payed and won some so he will be up 2 dollars.</Text>
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