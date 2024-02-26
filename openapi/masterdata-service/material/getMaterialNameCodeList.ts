import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/物料相关/getMaterialNameCodeListUsingPOST
*/
export default function fetchMethod(data: IMaterialNameNumberQueryVO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListReturnInformationAboutTheMaterial>(
        {
            url: "/masterdata-service/material/getMaterialNameCodeList",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 物料名称编号查询VO */
export interface IMaterialNameNumberQueryVO {
    /** 物料名称/编号 */
    nameOrCode: string;
    /** 物料类型数组 */
    materialTypeList: string[];
}
/** JSONResult«List«物料返回信息»» */
export interface IJSONResultListReturnInformationAboutTheMaterial {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IMaterialReturnInformation[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 物料返回信息 */
export interface IMaterialReturnInformation {
    /** id */
    id: number;
    /** 编号 */
    code: string;
    /** 名称 */
    name: string;
    /** 物料类型 */
    type: string;
    /** 物料类型名称 */
    typeName: string;
    /** 物料规格 */
    spec: string;
}
