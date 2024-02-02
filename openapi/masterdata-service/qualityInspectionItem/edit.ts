// 编辑质检分类 DTO_1
export interface I编辑质检分类DTO_1 {
    // id，如果不传就是新增
    id: number;
    // 质检分类名
    name: string;
    // 质检分类编码
    code: string;
    // 是否应用编码规则
    isCodeRule: string;
    // 质检方式
    qualityMethod: string;
    // 选择方式
    selectType: string;
    // 选项内容集合
    selectors: I质检项选择项编辑DTO[];
    // 备注
    remark: string;
    // 附件文件key
    attachedFileKey: string;
}
// 质检项选择项编辑DTO
export interface I质检项选择项编辑DTO {
    // 选择项名称
    name: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
