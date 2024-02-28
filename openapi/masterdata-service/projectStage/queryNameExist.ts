import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目阶段相关/queryNameExistUsingPOST
*/
export default function fetchMethod(options: { data: IProjectPhaseNumberQueryObject }, extraOptions?: any) {
    return http<IJSONResultIdCodeNameCommonTransferObject>(
        {
            url: "/masterdata-service/projectStage/queryNameExist",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目阶段编号查询对象 */
export interface IProjectPhaseNumberQueryObject {
    /** 项目id */
    projectId: string;
    /** 项目阶段名称 */
    name: string;
}
/** JSONResult«Id Code Name 通用传输对象» */
export interface IJSONResultIdCodeNameCommonTransferObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdCodeNameGenericTransportObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: string;
    /** code */
    code?: string;
    /** name */
    name?: string;
}
