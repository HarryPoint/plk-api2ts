import { http } from '@/api/http';

// http://47.108.139.107:17600/doc.html#/default/消息方案/getAllAppSelectorUsingGET
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListAppliesTheServiceTreeDTO>(
        {
            url: "/message-notification-service/messageSchema/getAllAppSelector",
            method: "get",
        },
        extraOptions,
    );
}
// JSONResult«List«应用业务树DTO»»
export interface IJSONResultListAppliesTheServiceTreeDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IApplyTheServiceTreeDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 应用业务树DTO
export interface IApplyTheServiceTreeDTO {
    // 路由id
    routerId: number;
    // 名称
    name: string;
    // 应用名称
    flowPathName: string;
    // 编号
    code: string;
    // 流程id
    flowPathId: number;
    // 流程树类型
    treeType: string;
    // 字段集
    columns: IApplicationServiceTreeFieldInformationReturnsTheDTO[];
    // 子集
    children: IApplyTheServiceTreeDTO[];
    // 流程code
    flowPathCode: string;
    // 明细表字段id - treeType = FLOW_TABLE时有值
    detailTableFieldId: number;
    // 明细表字段编码 - treeType = FLOW_TABLE时有值
    detailTableFieldCode: string;
    // 明细表字段序列号 - treeType = FLOW_TABLE时有值
    detailTableFieldSerialNo: string;
}
// 应用业务树字段信息返回DTO
export interface IApplicationServiceTreeFieldInformationReturnsTheDTO {
    // 字段id
    flowPathFormFieldId: number;
    // 流程id
    flowPathId: number;
    // 流程编码
    flowPathCode: string;
    // 名称
    name: string;
    // 编号
    code: string;
    // 序号值
    serialNo: string;
    // 是否是系统字段
    isSystem: string;
    // 字段类型
    flowPathFormFieldType: string;
    // 是否是表格内字段
    isTableField: string;
    // 选项集 传值传code，显示name
    selector: IFormFieldOption[];
    // 日期类型
    dateType: string;
    // 宽度
    span: number;
    // 组织类型
    organizationType: string;
    // 关联表单编码
    formRpCode: string;
    // 关联表单详细表格编码
    formDetailRpCode: string;
    // 所属关联表单编码
    sourceFormRpCode: string;
    // 所属关联表单字段serialNo
    sourceSerialNo: string;
    // 关联表单字段集
    columns: IApplicationServiceTreeFieldInformationReturnsTheDTO[];
}
// FormFieldOption
export interface IFormFieldOption {
    // undefined
    name: string;
    // undefined
    code: string;
    // undefined
    color: string;
}
