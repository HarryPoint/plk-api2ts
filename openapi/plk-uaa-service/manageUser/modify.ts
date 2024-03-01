import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/运营账号相关/modifyUsingPOST_7
*/
export default function fetchMethod(options: { data: IOperationUserModifiesRequest }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/manageUser/modify",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 运营用户修改请求 */
export interface IOperationUserModifiesRequest {
    /** id */
    id?: string;
    /** 运营员工 */
    manageEmployee?: IIdCodeNameGenericTransportObject;
    /** 角色集 */
    manageRoleList?: IIdInformation1[];
    /** 密码 */
    password?: string;
    /** 手机号 */
    telephone?: string;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** code */
    code?: string;
    /** id */
    id?: string;
    /** name */
    name?: string;
}
/** Id 信息_1 */
export interface IIdInformation1 {
    /** id */
    id: string;
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
