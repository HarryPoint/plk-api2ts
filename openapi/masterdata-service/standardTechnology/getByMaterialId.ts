import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/标准工艺相关/getByMaterialIdUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string; MaterialId?: string } }, extraOptions?: any) {
    return http<IJSONResultListStandardProcessDropDownResponseObject>(
        {
            url: "/masterdata-service/standardTechnology/getByMaterialId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«标准工艺下拉响应对象»» */
export interface IJSONResultListStandardProcessDropDownResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IStandardProcessDropDownResponseObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 标准工艺下拉响应对象 */
export interface IStandardProcessDropDownResponseObject {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
}
