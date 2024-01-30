import { Box, Button, Text, VStack } from "@chakra-ui/react";
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn,
} from "react-scroll-motion";

export default function Home() {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky(), MoveOut(0, -1200));

    function onClickKakao() {
        window.open("http://pf.kakao.com/_sXxoPG/chat", "Kakao", "popup=yes");
    }

    function onClickHomepage() {
        window.open(
            "https://instead-of-me.github.io/homepage",
            "Instead of me",
            "popup=yes"
        );
    }

    return (
        <Box w={"100vw"}>
            <ScrollContainer style={{ width: "100%" }}>
                <ScrollPage>
                    <Animator
                        animation={batch(Fade(), Sticky(), MoveOut(0, -200))}
                    >
                        <Text fontSize={36} fontWeight={"bold"}>
                            외주 개발 믿음직한 곳을 찾지 못하셨나요?
                        </Text>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Box
                        w={"100%"}
                        h={"100%"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        display={"flex"}
                    >
                        <Animator animation={batch(MoveIn(800, 0), Fade())}>
                            <Text fontSize={36} fontWeight={"bold"}>
                                왜 찾지 못하셨을까요?
                            </Text>
                        </Animator>
                    </Box>
                </ScrollPage>

                <ScrollPage>
                    <Box
                        w={"100%"}
                        h={"100%"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        display={"flex"}
                    >
                        <Animator animation={ZoomInScrollOut}>
                            <Text fontSize={36} fontWeight={"bold"}>
                                원하는 결과물이 안나올까봐?
                            </Text>
                        </Animator>
                    </Box>
                </ScrollPage>

                <ScrollPage>
                    <VStack
                        alignItems={"center"}
                        justifyContent={"center"}
                        display={"flex"}
                        h={"100%"}
                    >
                        <Text
                            style={{
                                fontSize: "40px",
                                lineHeight: 1.5,
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            그럴때는 저희 Instead Of Me!
                            <Animator animation={MoveIn(-500, 0)}>
                                Web Site, Application 등
                            </Animator>
                            <Animator animation={MoveIn(-900, 0)}>
                                원하시는 모든 것, 상상을 현실로
                            </Animator>
                            <Animator animation={MoveIn(-1300, 0)}>
                                완벽한 결과물로 보답합니다!
                            </Animator>
                        </Text>
                    </VStack>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <VStack
                            fontSize={36}
                            fontWeight={"bold"}
                            textAlign={"center"}
                            lineHeight={1.5}
                        >
                            <Text fontSize={48}>Instead Of Me</Text>
                            <Text>삼성전자 출신 개발자 3명이 뭉쳤습니다.</Text>
                            <Text>대기업 경력만 27년..</Text>
                        </VStack>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <VStack
                            fontSize={36}
                            mt={20}
                            fontWeight={"bold"}
                            lineHeight={1.2}
                        >
                            <Text fontSize={48} mb={10}>
                                Instead Of Me!
                            </Text>
                            <Text>여러분의 시작을 함께하고 싶습니다.</Text>
                            <Text>저희는 함께 성공하고 싶습니다.</Text>
                            <Text>지금 당장 문의해보세요!</Text>

                            <Button
                                bg={"yellow"}
                                mt={10}
                                _hover={{
                                    bg: "yellow",
                                    transform: "scale(1.15)",
                                }}
                                transition={"all 0.2s linear"}
                                onClick={onClickKakao}
                            >
                                <Text color={"black"} fontWeight={"extrabold"}>
                                    카카오톡 문의하기
                                </Text>
                            </Button>

                            <Button
                                bg={"black"}
                                mt={3}
                                _hover={{
                                    bg: "black",
                                    transform: "scale(1.15)",
                                }}
                                transition={"all 0.2s linear"}
                                onClick={onClickHomepage}
                            >
                                <Text color={"white"} fontWeight={"extrabold"}>
                                    홈페이지 둘러보기
                                </Text>
                            </Button>
                        </VStack>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </Box>
    );
}
