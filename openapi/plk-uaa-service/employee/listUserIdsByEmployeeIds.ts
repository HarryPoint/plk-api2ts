import { http } from "@/api/http";

/**
* @link http://47.108.139.107:18100/doc.html#/default/员工相关/listUserIdsByEmployeeIdsUsingPOST
*/
export default function fetchMethod(options: { data: IIdSetInformation }, extraOptions?: any) {
    return http<IJSONResultListlong>(
        {
            url: "/plk-uaa-service/employee/listUserIdsByEmployeeIds",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** id集 信息 */
export interface IIdSetInformation {
    /** id集 */
    ids: string[];
}
/** JSONResult«List«long»» */
export interface IJSONResultListlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
