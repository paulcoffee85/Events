// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SimpleStorage {
	uint256 public favoriteNumber;

	// an Event for whenever this store() number is updated
	event storedNumber(
		uint256 indexed oldNumber,
		uint256 indexed newNumber,
		uint256 addedNumber,
		address sender
	);

	function store(uint256 newFavoriteNumber) public {
		emit storedNumber(
			favoriteNumber,
			newFavoriteNumber,
			favoriteNumber + newFavoriteNumber,
			msg.sender
		);
		favoriteNumber = newFavoriteNumber;
	}
}
