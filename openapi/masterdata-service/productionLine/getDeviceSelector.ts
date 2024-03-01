import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/产线相关/getDeviceSelectorUsingPOST
*/
export default function fetchMethod(options: { data: IAssociatedQueryDtosOfDevicesInTheProductionLine }, extraOptions?: any) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>(
        {
            url: "/masterdata-service/productionLine/getDeviceSelector",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 产线设备关联查询DTO */
export interface IAssociatedQueryDtosOfDevicesInTheProductionLine {
    /** 名称or编号 */
    nameOrCode?: string;
    /** 用户已选数据 */
    selectedDeviceIdList?: string[];
}
/** JSONResult«List«Id Code Name 通用传输对象»» */
export interface IJSONResultListIdCodeNameACommonTransferObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IIdCodeNameGenericTransportObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
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
