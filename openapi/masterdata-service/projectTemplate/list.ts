import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/项目模板相关/listUsingGET_8
*/
export default function fetchMethod(options: { params: { ProjectCategory?: string } }, extraOptions?: any) {
    return http<IJSONResultListProjectTemplateRespondsToTheDTO>(
        {
            url: "/masterdata-service/projectTemplate/list",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目模板响应DTO»» */
export interface IJSONResultListProjectTemplateRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectTemplatesRespondToDtos[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目模板响应DTO */
export interface IProjectTemplatesRespondToDtos {
    /** 项目模板id */
    id?: string;
    /** 项目模板简介 */
    intro?: string;
    /** 主责部门 */
    mainDutyDeptId?: string;
    /** 项目名称 */
    name?: string;
    /** 项目开始日期 */
    projectBeginDate?: number;
    /** 项目大类 */
    projectCategory?: string;
    /** 项目结束日期 */
    projectEndDate?: number;
    /** 项目目的 */
    projectGoal?: string;
    /** 项目简介 */
    projectIntro?: string;
    /** 项目地址明细地址 */
    projectLocationDetailAddress?: string;
    /** 项目地址区域编码 */
    projectLocationRegionCode?: string;
    /** 项目经理id */
    projectManagerId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目类型id */
    projectTypeId?: string;
}
