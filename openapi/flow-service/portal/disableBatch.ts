import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/门户相关/disableBatchUsingPOST_1
*/
export default function fetchMethod(options: { data: IThePortalDisablesTheRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/flow-service/portal/disableBatch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 门户禁用请求DTO */
export interface IThePortalDisablesTheRequestDTO {
    /** 门户ID列表 */
    idList?: number[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ('Y' | 'N');
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
