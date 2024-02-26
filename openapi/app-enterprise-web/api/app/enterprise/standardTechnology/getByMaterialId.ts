import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺相关/getByMaterialIdUsingGET
*/
export default function fetchMethod(params: { materialId?: number }, extraOptions?: any) {
    return http<IJSONResultListStandardProcessDropDownResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnology/getByMaterialId",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«标准工艺下拉响应对象»» */
export interface IJSONResultListStandardProcessDropDownResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IStandardProcessDropDownResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 标准工艺下拉响应对象 */
export interface IStandardProcessDropDownResponseObject {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
}
