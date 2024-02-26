import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/运营账号相关/modifyUsingPOST_7
*/
export default function fetchMethod(data: IOperationUserModifiesRequest, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/manageUser/modify",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 运营用户修改请求 */
export interface IOperationUserModifiesRequest {
    /** 运营员工 */
    manageEmployee?: IIdCodeNameGenericTransportObject;
    /** 手机号 */
    telephone?: string;
    /** 密码 */
    password?: string;
    /** 角色集 */
    manageRoleList?: IIdInformation1[];
    /** id */
    id?: number;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: number;
    /** code */
    code?: string;
    /** name */
    name?: string;
}
/** Id 信息_1 */
export interface IIdInformation1 {
    /** id */
    id: number;
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
    ts?: number;
}
