import { FunctionComponent, React } from "react";
import { Image } from "react-bootstrap";
import fuuchanpic from "./2fab200ee45081b2d3a942cffdcc42bc.jpg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TextChat = () => {
	return (
		// <Row>
		//     <div className="OverlappingNameBar"
		//     style={{
		//         backgroundColor: "purple",
		//         minWidth: "50%",
		//         maxWidth: "75%",

		//     }} >
		//         <h3>CharacterName</h3>
		//     </div>
		//     <div className="ProfilePicture"
		//     style={{border: "1px solid ",
		//     borderRadius: "40%",
		//     borderColor: "purple" }}>
		//         <Image src={fuuchanpic}
		// alt="fuuchan"
		// rounded
		// fluid></Image>
		//     </div>
		// </Row>

		<>
			{" "}
			<div
				className="{styles.chattextbox}"
				style={{
					// position: "absolute",
					top: "669px",
					left: "38px",
					width: "1451px",
					height: "272px",
					overflow: "hidden",
					fontSize: "22px",
				}}
			>
				<div
					className="{styles.dialogSection}"
					style={{
						// position: "absolute",
						top: "43px",
						left: "251px",
						width: " 1188px",
						height: "342px",
						overflow: "hidden",
					}}
				>
					{" "}
					<p> lorem</p>
					<img
						className="{styles.dialogboxIcon}"
						style={{
							// position: "absolute",
							top: "83px",
							left: "0px",
							borderRadius: " 0px 183.61px 183.61px 0px",
							backgroundColor: " rgba(218, 235, 246, 0.75)",
							border: "4.6px solid #9dcae9",
							boxSizing: "border-box",
							width: "1188px",
							height: "215px",
							overflow: "hidden",
						}}
						alt=""
						src=""
					/>
					<div
						className="{styles.namePlate}"
						style={{
							// position: "absolute",
							top: "53.66px",
							left: "39.03px",
							borderRadius: "50.01px",
							backgroundColor: " #9dcae9",
							border: " 6.1px solid #9dcae9",
							boxSizing: "3px",
							borderBox: "5px",
							width: "399.1px",
							height: " 60.4px",
							overflow: "hidden",
						}}
					>
						{" "}
						<p>
							{" "}
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
							veniam voluptas praesentium aperiam, fuga eligendi explicabo
							officia eius beatae, possimus quam temporibus nisi? Dignissimos
							rem exercitationem reprehenderit similique illo. Illum!{" "}
						</p>
						<div
							className="nameGoesHere"
							style={{
								// position: "absolute",
								top: "16.77px",
								left: "62.6px",
							}}
						>
							Name Goes Here
						</div>
					</div>
				</div>
				<FontAwesomeIcon icon={faStar} />
				<img
					className="floatingIcon"
					alt=""
					src={fuuchanpic}
					style={{
						width: " 250px",
						// position: "relative",
						borderRadius: " 25px",
						maxWidth: "100%",
						overflow: " hidden",
						height: "250px",
						objectFit: "cover",
					}}
				/>
			</div>{" "}
		</>
	);
};

export default TextChat;
