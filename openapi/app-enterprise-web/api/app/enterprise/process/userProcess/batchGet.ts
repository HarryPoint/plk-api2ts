import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/工序相关/batchGetUserProcessUsingPOST
*/
export default function fetchMethod(data: number[], extraOptions?: any) {
    return http<IJSONResultListUserProcessVo>(
        {
            url: "/app-enterprise-web/api/app/enterprise/process/userProcess/batchGet",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«List«UserProcessVo»» */
export interface IJSONResultListUserProcessVo {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IUserProcessVo[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** UserProcessVo */
export interface IUserProcessVo {
    /** undefined */
    id: number;
    /** undefined */
    processId: number;
    /** undefined */
    executorType: string;
    /** undefined */
    refId: number;
    /** undefined */
    type: string;
    /** undefined */
    refName: string;
}
