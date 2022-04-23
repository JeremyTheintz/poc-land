import axios from 'axios';
import { ethers } from 'ethers';
import { isAddress } from 'ethers/lib/utils';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  StyledForm, StyledFormItem, StyledInput, StyledLabel,
} from '../components/form/Form';
import Page from '../components/utils/Page';
import useWallet from '../hooks/useWallet';
import { Button, StyledHeadingOne } from '../styles/GlobalComponents';
import pocAbi from '../utils/pocAbi';

const CLAIM_STEP = {
  unset: 'unset',
  setAddress: 'setAddress',
  minting: 'minting',
};

const Claim = () => {
  const [recipient, setRecipient] = useState('');
  const [pocId, setPocId] = useState('');

  const [claimStep, setClaimStep] = useState(0);

  const { account } = useWallet();

  const isDataValid = useMemo(() => isAddress(recipient), [recipient]);
  const isPocIdValid = useMemo(() => {
    if (!pocId) {
      return false;
    }

    // TODO : udpate when pocId will be a real id (not an address)
    return isAddress(pocId);
  }, [pocId]);

  async function getPocContract(ethereumProvider, pocAddress) {
    // const contractAddress = availableNetworks.find((net) => net.chainId === currentChainId)?.contractAddress;
    const provider = new ethers.providers.Web3Provider(ethereumProvider);
    const dnpContract = new ethers.Contract(pocAddress, pocAbi, provider);
    return dnpContract;
  }

  const getPocMetadata = async (e) => {
    // TODO
    const pocAddress = '0x326162D47d7274f6602e08D5860A5634B8eA4182';
    const poc = await getPocContract(window.ethereum, pocAddress);
    poc.callStatic('tokenURI').then((metadata) => {
      console.log('metadata', metadata);
    });
  };

  const claimPoc = async (e) => {
    e.preventDefault();
    console.log('whatsssupppp');

    try {
      // TODO : Claim PoC
      const url = `${process.env.SERVER_URL}/v1/server/mint`;
      const payload = {
        pocAddress: '0xeD616c1bb22C80c5EB35c492a992f3CDFD4098b0',
        pocId,
        recipient,
      };
      const res = await axios.post(url, payload);
      console.log('res', res);
    } catch (err) {
      console.error('Error claiming PoC: ', err);
    }
  };

  useEffect(() => {
    if (account) {
      setRecipient(account);
    }
  }, [account]);

  return (
    <Page title="Claim">
      <StyledContainer>
        <StyledHeadingOne>
          Claim PoC
        </StyledHeadingOne>

        <StyledForm>

          <StyledFormItem isVisible>
            <StyledLabel>
              Set your Address
            </StyledLabel>
            <StyledInput
              type="text"
              placeholder="Name"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </StyledFormItem>

          <Button
            style={{ width: '100%' }}
            type="submit"
            onClick={(e) => claimPoc(e)}
          >
            {/* // disabled= {!isDataValid || !isPocIdValid} */}
            Claim
          </Button>

        </StyledForm>

      </StyledContainer>
    </Page>
  );
};

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  z-index: 2;

  min-height: 100vh;
  padding-top: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: ${({ theme }) => theme.spacing.xl};
  }
`;

export default Claim;
