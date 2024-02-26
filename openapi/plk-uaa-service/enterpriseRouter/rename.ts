import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/企业路由相关/renameUsingPOST
*/
export default function fetchMethod(data: IEnterpriseRouteRenamingRequestDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/enterpriseRouter/rename",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 企业路由重命名请求 DTO */
export interface IEnterpriseRouteRenamingRequestDTO {
    /** 路由id */
    id: number;
    /** 新名称 */
    newName: string;
    /** 客户端组编码 */
    clientGroupCode: string;
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
