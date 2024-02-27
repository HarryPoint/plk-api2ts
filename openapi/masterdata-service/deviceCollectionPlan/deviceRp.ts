import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/设备数采数据方案相关/deviceRpUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionSolutionEditDTOByApplyingDeviceAssociationInformation, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/deviceCollectionPlan/deviceRp",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数采方案应用设备关联信息编辑DTO */
export interface IDeviceDataAcquisitionSolutionEditDTOByApplyingDeviceAssociationInformation {
    /** 方案id */
    id?: string;
    /** 设备id集 */
    deviceIds?: string[];
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
