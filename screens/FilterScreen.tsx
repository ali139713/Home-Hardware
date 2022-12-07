import React, {useState} from 'react';
import {Button, FormControl, Modal, Stack} from 'native-base';

export const FilterScreen = () => {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        space={2}></Stack>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setOpen(false);
                }}>
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setOpen(false);
                }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

const styles = {};
