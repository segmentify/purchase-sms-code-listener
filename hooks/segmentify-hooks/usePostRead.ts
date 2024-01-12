import { useMutation } from '@tanstack/react-query';
import { Post } from '../../lib/http';

import type { ServiceRequestData } from '../../types/service-request-data.type';

const channelURL = '/T08NPGY4Q/B06DP7UV476/qedkEcLLE95iWqOHPipnfH5U';

export const usePostRead = (mutationKeys?: Array<string>) =>
  useMutation({
    mutationKey: mutationKeys,
    mutationFn: async (data: ServiceRequestData) => {
      const response = await Post(channelURL, data);
      return response.data;
    },
  });
