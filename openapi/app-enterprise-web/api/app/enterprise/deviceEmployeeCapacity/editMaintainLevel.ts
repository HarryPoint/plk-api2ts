import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/设备人员能力相关/editMaintainLevelUsingPOST
*/
export default function fetchMethod(data: ISelectorJsonInfo[], params: { flowPathId: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceEmployeeCapacity/editMaintainLevel",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** SelectorJsonInfo */
export interface ISelectorJsonInfo {
    /** undefined */
    name: string;
    /** undefined */
    code: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
