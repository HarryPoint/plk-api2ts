import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/客户端组相关/modifyUsingPOST_1
*/
export default function fetchMethod(options: { data: IExampleModifyTheDTOOfAClientGroup }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/clientGroup/modify",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 客户端组修改 DTO */
export interface IExampleModifyTheDTOOfAClientGroup {
    /** 编码 */
    code?: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
