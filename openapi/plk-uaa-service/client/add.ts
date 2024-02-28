import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.139.107:18100/doc.html#/default/客户端相关/addUsingPOST
*/
export default function fetchMethod(options: { data: ITheDTOIsAddedToTheClient }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/client/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 客户端新增 DTO */
export interface ITheDTOIsAddedToTheClient {
    /** 编码 */
    code: string;
    /** 名称 */
    name: string;
    /** 登录类型 */
    loginType: ETheDTOIsAddedToTheClient_loginType;
    /** 客户端组 */
    clientGroup?: IExampleModifyTheDTOOfAClientGroup;
}
/** 客户端组修改 DTO */
export interface IExampleModifyTheDTOOfAClientGroup {
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** id */
    id?: string;
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

export enum ETheDTOIsAddedToTheClient_loginType {
    /** 运营管理 */
    MANAGE = "MANAGE",
    /** Saas系统 */
    SAAS = "SAAS"
}
