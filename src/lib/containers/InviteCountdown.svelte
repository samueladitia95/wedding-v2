<script lang="ts">
	import dayjs from "dayjs";
	import duration from "dayjs/plugin/duration";
	import { onMount } from "svelte";
	import "@splidejs/svelte-splide/css";
	import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
	import { browser } from "$app/environment";
	import { inview } from "svelte-inview";
	import { fade, fly } from "svelte/transition";

	dayjs.extend(duration);

	let isShowBrideGroom = false;
	let isShowCarausel = false;
	let isShowCountdown = false;

	const weddingDay = dayjs("2023-11-17", "yyyy-mm-dd");
	let countdowns = [
		{ type: "Day", value: 0 },
		{ type: "Hour", value: 0 },
		{ type: "Minute", value: 0 },
		{ type: "Second", value: 0 }
	];
	const images = [
		"https://s3-alpha-sig.figma.com/img/d4cf/da07/b57ce6958b6317338089bab56626cd5e?Expires=1696204800&Signature=jOdc~feuGO6pvelN4qcQyipPBMxuQqZbJFHpiVQZn97M~WwpZC6H9pWUbmG8eGGXTD3otK3rxgD~xqCTDzayYMy6Bx8ybuJNXi0CdjbkoyDKF0WuPqqbm-n4~9q~9l5fN8KMD-s3IC5kmuNiQqRhcWNrKZDMjsEjecCoLYpkT1oKo0itxYe-fZrTImrilwZps63S4lVUdtKqWLR5SL9NV9Fh3KMvzJDXOZjzIMwx8YDyExyvxKpqSBwrFRT5u6gmuCB2cz76eZ8R91mcrJsDzvjmnoIXJZ5t6dU3iPcvfb8z0EqqYS9~e~bnv~tBXiJ6D4pAzmvIcFsnoHyduQpuOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
		"https://lh3.googleusercontent.com/fife/AKsag4PtmlAbCTu6N0i5zpPEc-G7GkAs6_yJb4Lzb6lNnaoWmPtXIMX5-rGPgV44efpCtet4l4Vdca6XtGFKf4vCqjNruS8r9AwVEJ9jGFniJMFZTTLo7qHIacivBAe-A_YV0OQYCHs1tHJJUp0QmsH8YiMIQ2TW2FgcnqMCS2eE1fK1eMEmiW9-SHYmckzhU8nst9BSpQVaHAhdV5SKdGEcSEjn4txONAlLU0LyKrKDt3BfDCyuhwzlMCMaVMUYKF0Qg2Bm-qkJm80-Kqv5IyOnes86Wh_jIhRiELYmUqtB-CUS60HfhCn5CSTEkH9cX0asyksNAzNxcNzWSCKf66phNgwJ6BW6Idxb44oi3FxvSr6ljuf1j8GLwy-L7nBclqu9Df8QEAKKJPOWVC7uBJbLZaKR4MX0UYBA3CiFbVAnPIKfe53LtlUcTs-MhGKb7zKvLdoZ_q_SJ0mPTXqvL9rjoEio3n9jBc9Tq6fK0xKJZj5RL_fYqFoobEEBIYcoUVb53jDOzBTmphJ6E6WS56xvUjUCcYiZoQkiGmJtX5Fhb99IT_4MhKF3TeXEVp47iL2L8sz6pcC-OjdwzRDT62pow6LdfuXVRdfkZtudmrA_BOiHLPhTs0TUK2CkAqL75UTdTIw05yUY3L6dQv-7bcm0c_248kdirO0__s0JkKejNheApSY4vk4xSSbsNoLhIzCPw9V05_27WugyauZLBAdgzLszaPHVt1XR8kb68WgVv7YHk7heq3ncxpeswuADnekZzi0C6A2N_5SqfsCPF_rlAdUw1Hi9cM4-ujkqUE-Gv8EtBtSkF3VRE3efE1QV52H9vucY4QGnEkyDmGPuHmgveLqzPuCuqP7KgK-P8qhPPsC2NsZdJaXbSqaQ_Mmmsf4Gi6_rUXnIXEfjIZtdsBU1OcBewNhh2X4wDTRRADmnAJ_uBDnL9d4G8QCDJyFahP_B4T1zLHsTcGXYkrDlOHtGpVy01lgZPJq_TvIH1ZtBjmZQv5JkrWg1HHg4z9-vupUvrr3rbDG0JykyXlVoiPNmeSTjXB2Cp_JC28goSJj0nUV-8JujcdiRCL10QN8uAP2PjZ4CnZq2HIJxSlchNEtuhMIdFfFVOJ1eeiMvrZWL2b1V9Py_nmLmN_AtkJDPB0EK1OypEIJDYYDVfePYCyvjTLqkbHWtjQFEPceBvxFqKGCegKac1DRIdxnfggToWD4LLE6DN_86R2p7t11uStrt_vgxAzpUexFH6MsezRgb0MdQbmVEGU9cY7jDXyxJmLadFlrgjP2lxYx_8ujs1OGACeW6D8UkBlAZEDM40BuZTVFVlvJdxDVrBF7Uuuah83Aj5Wf-nKRyePbcrNZmtmqt4oy17KRaglUcblQbJUdYcepWen8qD7W-P2p9nUFcwqCtUC05zJHk4VZmvpkC7EozvDF3bGpo7s7S6Msz4t-stMNY7vMtoFvD5IFGjzzS-I-35AqZI185Sw5G4V2feEOusOufweR-KduuTahsaKhA8kXj4c5PnMW06CfwbzU8kvX1hwfZIZfaGp_XkGjEC_kgR5eRV41QumfaeJpG-0kh9jP2thZlNIjAZpLaaUQygg=w1920-h1003",
		"https://s3-alpha-sig.figma.com/img/0268/5db3/16bcfc05bd6ee807b190c192dc35932c?Expires=1696204800&Signature=i5NsXVvQ7A9YSMODklZqLPyTQcJ2Gf3d01kZTHHtDza7ddcUDi6lJghnGLtiu4qJazFDQDfJsHFYeN9rDpGDCXbndFPqHkmej6cIj83CMW0xez3t9FVSyTY3pnC7DzcJXGMv0lYr4Mw3xgtTNbW0aYYjg5jscznk6AJPPuqQ98eojljCD0Iq~~tSvVEAdW0b4Z0MsbRcwfYXvP8m8yJFWkD6MeHx4TRg-eGoh2k8SkQHO9HmkBNVKnOR2YYX0vb2ASlM9tZcrdh-AOVNBo5mtS0egfSHPjf52o0rErepg0xVXnmavL1oQsHwJDz2U6wyIAysu-P4jP-9tznKIDVSZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
		"https://s3-alpha-sig.figma.com/img/d991/a220/c2eb9f7a337415421376be066323839d?Expires=1696204800&Signature=HwnIxH17tq5WC2rrt0W~C7y7KcuiltQetbKVvr2DAPGHXqi6eIl5pyX~5zc6aXrcKPW5iSE7zZHVN~RAEgW69JQK7OEOTs1x8tEaSPqVAt5abPtY7DDOStuaUYQjtE6fgdiipI5x5-4lzaqxUExGpUY25wB3s0NYqBEurkZCAE50Yy4TE9mou7Vjq4uxL7ocb2wbBHQuNS36kHRe3bzkHX2nkaIkhSzpHv7m0O1hz9N6Dz1eSh6sBbA8ugwXatyV~xUasAgE6V6PSaFDg~NDqD-s6WSDXcjY3w5~srrmcdrLfjjm05PokSTgCW9M9ZlGqwQjNU3khv7WdrlbG~RPRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
	];

	const handleChangeBrideGroom = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShowBrideGroom && detail.inView) isShowBrideGroom = true;
	};
	const handleChangeCarausel = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShowCarausel && detail.inView) isShowCarausel = true;
	};
	const handleChangeCountdown = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShowCountdown && detail.inView) isShowCountdown = true;
	};

	onMount(() => {
		setInterval(function () {
			const currentTime = dayjs();
			const duration = dayjs.duration(weddingDay.diff(currentTime));

			countdowns = [
				{ type: "Day", value: Math.floor(duration.asDays()) },
				{ type: "Hour", value: duration.hours() },
				{ type: "Minute", value: duration.minutes() },
				{ type: "Second", value: duration.seconds() }
			];
		}, 1000);
	});
</script>

<div class="relative min-h-screen min-w-full">
	<div class="min-h-screen min-w-full bg-ro-brown pt-32">
		<div class="">
			<div class="bg-ro-light-creme rounded-t-full h-[200px]" />
			<div class="bg-ro-light-creme">
				<div class="container min-h-screen max-w-sm text-ro-black">
					<div
						class="flex flex-col gap-10"
						use:inview={{
							rootMargin: "0px",
							unobserveOnEnter: true
						}}
						on:inview_change={handleChangeBrideGroom}
					>
						{#if isShowBrideGroom}
							<!-- Groom -->
							<div
								class="text-center flex flex-col gap-2"
								in:fly={{ y: -1000, duration: 2000, delay: 500 }}
							>
								<div class="text-4xl font-mirage">Raymond Winoto</div>
								<div class="text-lg font-mirage">Son of Epi Sodie Winoto and Fenny Tjie</div>
							</div>

							<div class="text-5xl font-alex text-center" in:fade={{ duration: 2000, delay: 500 }}>
								&
							</div>

							<!-- Bride -->
							<div
								class="text-center flex flex-col gap-2 mb-36"
								in:fly={{ y: 1000, duration: 2000, delay: 500 }}
							>
								<div class="text-4xl font-mirage">Olivia Virginia Halim</div>
								<div class="text-lg font-mirage">Daughter of Rudy Halim and Helena Halim</div>
							</div>
						{/if}
					</div>

					{#if browser}
						<div
							use:inview={{
								rootMargin: "-100px",
								unobserveOnEnter: true
							}}
							on:inview_change={handleChangeCarausel}
						>
							{#if isShowCarausel}
								<div in:fade={{ duration: 2000, delay: 500 }}>
									<Splide
										aria-label="invite countdown carausel"
										extensions={{ AutoScroll }}
										options={{
											arrows: false,
											pagination: false,
											autoScroll: {
												rewind: true
											}
										}}
									>
										{#each images as image}
											<SplideSlide>
												<img
													src={image}
													alt="invite"
													class="object-cover w-[307px] max-h-[336px] rounded"
												/>
											</SplideSlide>
										{/each}
									</Splide>
								</div>
							{/if}
						</div>
					{/if}

					<div
						use:inview={{
							rootMargin: "-100px",
							unobserveOnEnter: true
						}}
						on:inview_change={handleChangeCountdown}
					>
						{#if isShowCountdown}
							<div
								class="font-mirage text-xl text-center mb-20 mt-32"
								in:fly={{ x: -1000, duration: 2000, delay: 500 }}
							>
								INVITE YOU TO THEIR WEDDING
							</div>

							<div
								class="font-island text-ro-black text-4xl text-center mb-12"
								in:fly={{ x: -1000, duration: 2000, delay: 1000 }}
							>
								<div>Friday,</div>
								<div>17 November 2023</div>
							</div>

							<!-- Timer -->
							<div
								class="grid grid-cols-2 grid-rows-2 text-ro-brown gap-y-8 gap-x-4 max-w-[250px] mx-auto pb-28"
								in:fly={{ x: -1000, duration: 2000, delay: 1500 }}
							>
								{#each countdowns as countdown}
									<div class="flex flex-col justify-center items-center">
										<div class="font-mirage text-5xl">{countdown.value}</div>
										<div class="font-oakes">{countdown.type}(S)</div>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
