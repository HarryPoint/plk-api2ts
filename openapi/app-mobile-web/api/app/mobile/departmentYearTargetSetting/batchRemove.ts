import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17400/doc.html#/default/部门年目标设置相关/batchRemoveByFlowPathIdUsingPOST_1
*/
export default function fetchMethod(options: { data: IIdCollectionInformation }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/departmentYearTargetSetting/batchRemove",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** id集合信息 */
export interface IIdCollectionInformation {
    /** id集合 */
    ids?: string[];
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
