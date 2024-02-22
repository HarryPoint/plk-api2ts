import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/工艺文档映射配置/listAllProcessDocumentUsingGET
export function fetchMethod(params: { enterpriseId: number }) {
    return get({
      url: "/masterdata-service/processDocumentMapConfig/listAllProcessDocument",
      params,
    });
}
// JSONResult«List«工艺文档VO»»
export interface IJSONResultListProcessDocumentVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessDocumentationVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺文档VO
export interface IProcessDocumentationVO {
    // 文档编号
    code: string;
    // 文档名称
    name: string;
    // 展示模块
    displayModuleEnum: string;
    // 是否在大屏上展示
    isDisplayEnum: string;
    // 展示模块 -- 字符串
    displayModule: string;
    // 是否在大屏上展示 -- 字符串
    isDisplay: string;
    // 排序
    sort: number;
    // 适用物料ids
    applyMaterialIdList: number[];
    // 适用物料名称列表
    applyMaterialNameList: string[];
    // 适用车间ids
    applyAreaIdList: number[];
    // 适用工序ids
    applyProcessIdList: number[];
    // 文档内容
    content: string;
}
