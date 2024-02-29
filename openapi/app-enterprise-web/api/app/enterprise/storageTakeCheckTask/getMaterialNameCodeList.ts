import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/仓库盘点任务相关/getMaterialNameCodeListUsingPOST
*/
export default function fetchMethod(options: { data: IMaterialNameNumberQueryVO }, extraOptions?: any) {
    return http<IJSONResultListReturnInformationAboutTheMaterial>(
        {
            url: "/app-enterprise-web/api/app/enterprise/storageTakeCheckTask/getMaterialNameCodeList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 物料名称编号查询VO */
export interface IMaterialNameNumberQueryVO {
    /** 物料名称/编号 */
    nameOrCode?: string;
    /** 物料类型数组 */
    materialTypeList?: string[];
}
/** JSONResult«List«物料返回信息»» */
export interface IJSONResultListReturnInformationAboutTheMaterial {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialReturnInformation[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料返回信息 */
export interface IMaterialReturnInformation {
    /** id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 物料类型 */
    type?: string;
    /** 物料类型名称 */
    typeName?: string;
    /** 物料规格 */
    spec?: string;
}
