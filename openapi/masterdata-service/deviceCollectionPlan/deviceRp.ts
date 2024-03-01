import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采数据方案相关/deviceRpUsingPOST
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionSolutionEditDTOByApplyingDeviceAssociationInformation, params: { EnterpriseId?: string; UserId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/deviceCollectionPlan/deviceRp",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数采方案应用设备关联信息编辑DTO */
export interface IDeviceDataAcquisitionSolutionEditDTOByApplyingDeviceAssociationInformation {
    /** 设备id集 */
    deviceIds?: string[];
    /** 方案id */
    id?: string;
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
