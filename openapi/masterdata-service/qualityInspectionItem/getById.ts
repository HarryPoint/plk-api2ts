import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检项/getByIdUsingGET_15
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string; Id?: string } }, extraOptions?: any) {
    return http<IJSONResultCheckItemDetailsVOIsReturned>(
        {
            url: "/masterdata-service/qualityInspectionItem/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«质检项详细返回VO» */
export interface IJSONResultCheckItemDetailsVOIsReturned {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ICheckItemDetailsAreReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质检项详细返回VO */
export interface ICheckItemDetailsAreReturnedToVO {
    /** 附件文件id */
    attachedFileId?: string;
    /** 附件文件key */
    attachedFileKey?: string;
    /** 附件文件名 */
    attachedFileName?: string;
    /** 附件文件完整路径 */
    attachedFileUrl?: string;
    /** 质检项编号 */
    code?: string;
    /** id */
    id?: string;
    /** 质检项名称 */
    name?: string;
    /** 质检方式 */
    qualityMethod?: ECheckItemDetailsAreReturnedToVO_qualityMethod;
    /** 质检方式描述 */
    qualityMethodDesc?: string;
    /** 备注 */
    remark?: string;
    /** 选择方式 */
    selectType?: ECheckItemDetailsAreReturnedToVO_selectType;
    /** 选择方式描述 */
    selectTypeDesc?: string;
    /** 选项内容集合 */
    selectors?: ITheInspectionItemOptionReturnsVO[];
}
/** 质检项选择项返回VO */
export interface ITheInspectionItemOptionReturnsVO {
    /** 选择项名称 */
    name?: string;
}

export enum ECheckItemDetailsAreReturnedToVO_qualityMethod {
    /** 数值比对 */
    NUMBER_COMPARE = "NUMBER_COMPARE",
    /** 人工判断 */
    ARTIFICIAL = "ARTIFICIAL"
}

export enum ECheckItemDetailsAreReturnedToVO_selectType {
    /** 单选 */
    SELECTOR = "SELECTOR",
    /** 多选 */
    CHECKBOX = "CHECKBOX"
}
