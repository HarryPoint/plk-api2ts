import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/项目模板相关/listUsingGET_5
export default function fetchMethod(params: { projectCategory: string }) {
    return http<IJSONResultListProjectTemplateRespondsToTheDTO>({
        url: "/masterdata-service/projectTemplate/list",
        method: "get",
        params,
    });
}
// JSONResult«List«项目模板响应DTO»»
export interface IJSONResultListProjectTemplateRespondsToTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectTemplatesRespondToDtos[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目模板响应DTO
export interface IProjectTemplatesRespondToDtos {
    // 项目模板id
    id: number;
    // 项目名称
    name: string;
    // 项目大类
    projectCategory: string;
    // 项目模板简介
    intro: string;
    // 项目名称
    projectName: string;
    // 项目类型id
    projectTypeId: number;
    // 项目经理id
    projectManagerId: number;
    // 主责部门
    mainDutyDeptId: number;
    // 项目开始日期
    projectBeginDate: string;
    // 项目结束日期
    projectEndDate: string;
    // 项目目的
    projectGoal: string;
    // 项目地址区域编码
    projectLocationRegionCode: string;
    // 项目地址明细地址
    projectLocationDetailAddress: string;
    // 项目简介
    projectIntro: string;
}
